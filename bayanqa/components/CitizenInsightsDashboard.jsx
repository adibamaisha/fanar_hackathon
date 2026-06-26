import { useEffect, useMemo, useState } from "react";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import {
  FEEDBACK_UPDATED_EVENT,
  getAverageRatings,
  getFeedbackData,
  getServiceCounts,
  SERVICE_CATEGORIES,
} from "@/utils/feedback";

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const CATEGORY_COLOR_MAP = {
  Traffic: "#2563eb",
  Business: "#4f46e5",
  Report: "#0ea5e9",
  Banking: "#14b8a6",
  Document: "#f59e0b",
  Healthcare: "#22c55e",
  "Wills & Estate": "#ec4899",
};

function getCategoryColors() {
  return SERVICE_CATEGORIES.map((service) => CATEGORY_COLOR_MAP[service] || "#64748b");
}

export default function CitizenInsightsDashboard() {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    const loadData = () => {
      setFeedbackData(getFeedbackData());
    };

    loadData();
    window.addEventListener("storage", loadData);
    window.addEventListener(FEEDBACK_UPDATED_EVENT, loadData);
    window.addEventListener("focus", loadData);
    document.addEventListener("visibilitychange", loadData);
    return () => {
      window.removeEventListener("storage", loadData);
      window.removeEventListener(FEEDBACK_UPDATED_EVENT, loadData);
      window.removeEventListener("focus", loadData);
      document.removeEventListener("visibilitychange", loadData);
    };
  }, []);

  const serviceCounts = useMemo(() => getServiceCounts(feedbackData), [feedbackData]);
  const averageRatings = useMemo(() => getAverageRatings(feedbackData), [feedbackData]);

  const pieData = useMemo(
    () => ({
      labels: SERVICE_CATEGORIES,
      datasets: [
        {
          label: "Service Demand",
          data: SERVICE_CATEGORIES.map((service) => serviceCounts[service] || 0),
          backgroundColor: getCategoryColors(),
          borderColor: "#ffffff",
          borderWidth: 2,
        },
      ],
    }),
    [serviceCounts]
  );

  const barData = useMemo(
    () => ({
      labels: SERVICE_CATEGORIES,
      datasets: [
        {
          label: "Average Satisfaction",
          data: SERVICE_CATEGORIES.map((service) => averageRatings[service] || 0),
          backgroundColor: getCategoryColors(),
          borderColor: getCategoryColors(),
          borderWidth: 1,
          borderRadius: 8,
          maxBarThickness: 56,
        },
      ],
    }),
    [averageRatings]
  );

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        max: 3,
        ticks: {
          stepSize: 1,
        },
        grid: {
          color: "rgba(148, 163, 184, 0.2)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <section className="insights-dashboard" aria-label="Citizen Insights Dashboard">
      <div className="insights-header">
        <span className="insights-badge">ANALYTICS</span>
        <h2>Citizen Insights Dashboard</h2>
        <p>
          AI-powered government assistant with citizen feedback analytics.
        </p>
      </div>

      <div className="insights-grid">
        <article className="insights-card">
          <h3>Service Demand</h3>
          <p className="insights-note">Based on submitted feedback count per service.</p>
          <div className="chart-wrap">
            <Pie data={pieData} options={pieOptions} />
          </div>
        </article>

        <article className="insights-card">
          <h3>Satisfaction Analysis</h3>
          <p className="insights-note">Average score: Satisfied=3, Neutral=2, Dissatisfied=1.</p>
          <div className="chart-wrap">
            <Bar data={barData} options={barOptions} />
          </div>
        </article>
      </div>

      {feedbackData.length === 0 && (
        <p className="insights-empty">No feedback yet. Submit feedback from chat to see live insights.</p>
      )}

      <style jsx>{`
        .insights-dashboard {
          margin-top: 2.5rem;
          padding: 2rem;
          border: 1px solid #e5e7eb;
          border-radius: 1.5rem;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
        }

        .insights-header h2 {
          margin: 0.35rem 0;
          font-size: 1.9rem;
        }

        .insights-header p {
          margin: 0;
          color: #4b5563;
        }

        .insights-badge {
          display: inline-flex;
          padding: 0.4rem 0.75rem;
          border-radius: 999px;
          background: rgba(37, 99, 235, 0.12);
          color: #1d4ed8;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        .insights-grid {
          margin-top: 1.5rem;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .insights-card {
          border: 1px solid #e5e7eb;
          border-radius: 1rem;
          padding: 1rem;
          background: #ffffff;
        }

        .insights-card h3 {
          margin: 0;
          font-size: 1.1rem;
        }

        .insights-note {
          margin: 0.45rem 0 0.8rem;
          color: #6b7280;
          font-size: 0.9rem;
        }

        .chart-wrap {
          height: 280px;
        }

        .insights-empty {
          margin: 1rem 0 0;
          color: #6b7280;
          font-size: 0.92rem;
        }

        @media (max-width: 900px) {
          .insights-grid {
            grid-template-columns: 1fr;
          }

          .chart-wrap {
            height: 250px;
          }
        }
      `}</style>
    </section>
  );
}
