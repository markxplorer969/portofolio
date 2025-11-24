"use client";

import { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { Tooltip } from "react-tooltip";

// GitHub username - replace with your actual username
const GITHUB_USERNAME = "markxplorer969"; // Replace with your real username

// Custom theme matching Vibe Coder aesthetic (Dark & Indigo)
const theme = {
  dark: ['#18181b', '#312e81', '#4338ca', '#6366f1', '#818cf8'],
};

// Mock data generator for fallback
const generateMockData = () => {
  const data = [];
  const now = new Date();
  
  for (let i = 365; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    // Bias towards active days (levels 2-3) for a more impressive looking graph
    const random = Math.random();
    let level;
    if (random < 0.1) {
      level = 0; // 10% no activity
    } else if (random < 0.25) {
      level = 1; // 15% low activity
    } else if (random < 0.55) {
      level = 2; // 30% medium activity
    } else if (random < 0.85) {
      level = 3; // 30% high activity
    } else {
      level = 4; // 15% very high activity
    }
    
    // Generate contribution count based on level
    let count = 0;
    if (level > 0) {
      count = Math.floor(Math.random() * (level * 3)) + 1;
    }
    
    data.push({
      date: date.toISOString().split('T')[0],
      count: count,
      level: level
    });
  }
  
  return data;
};

export default function GithubGraph() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usingMockData, setUsingMockData] = useState(false);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        setError(null);
        setUsingMockData(false);
        
        // Fetch contribution data from GitHub API
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const contributionData = await response.json();
        
        // Check if we got valid data
        if (contributionData && contributionData.contributions && contributionData.contributions.length > 0) {
          setData(contributionData.contributions);
        } else {
          // Fallback to mock data if API returns empty or invalid data
          console.log("GitHub API returned empty data, using mock data");
          setData(generateMockData());
          setUsingMockData(true);
        }
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
        console.log("Using mock data as fallback");
        setError('Failed to load GitHub activity data');
        setData(generateMockData());
        setUsingMockData(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <section className="py-20 flex justify-center px-4">
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex items-center justify-center p-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              <span className="text-zinc-500 text-sm ml-2">Loading GitHub activity...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 flex justify-center px-4">
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 overflow-hidden backdrop-blur-sm">
          
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Code Contributions</h2>
              <p className="text-zinc-400 text-sm">
                {usingMockData ? 'Sample contribution graph' : 'My open source activity log over the last year.'}
              </p>
              {usingMockData && (
                <p className="text-indigo-400 text-xs mt-1">
                  Using sample data - update GITHUB_USERNAME in the component
                </p>
              )}
            </div>
            <div className="text-zinc-500 text-xs font-mono bg-zinc-800/50 px-3 py-1 rounded-full">
              @{GITHUB_USERNAME}
            </div>
          </div>

          {/* Graph Container */}
          <div className="flex justify-center relative z-10">
            <div className="w-full overflow-x-auto">
              {Array.isArray(data) && data.length > 0 ? (
                <ActivityCalendar
                  data={data}
                  theme={theme}
                  blockSize={14}
                  blockMargin={4}
                  fontSize={12}
                  hideColorLegend={false}
                  hideTotalCount={false}
                  showWeekdayLabels={true}
                  labels={{
                    legend: {
                      less: "Less",
                      more: "More"
                    },
                    months: [
                      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                    ],
                    weekdays: [
                      'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
                    ],
                    totalCount: '{{count}} contributions in the last year'
                  }}
                  renderBlock={(block, activity) => (
                    <Tooltip
                      id={`activity-${activity.date}`}
                      content={`${activity.count} contribution${activity.count !== 1 ? 's' : ''} on ${activity.date}`}
                    >
                      <div 
                        className="transition-all duration-200 hover:scale-110 cursor-pointer"
                        title={`${activity.count} contribution${activity.count !== 1 ? 's' : ''} on ${activity.date}`}
                      >
                        {block}
                      </div>
                    </Tooltip>
                  )}
                />
              ) : (
                <div className="flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-zinc-800/50 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-zinc-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261 1.16-.424.717-.186 1.379-.418.601-.18 1.085-.438.397-.196.815-.4.815-.088-.383-.197-.826-.252-1.279-.095-.453-.2-.906-.295-1.36-.15-.6-.3-1.2-.432-1.789l.012-.024c.01-.046.026-.097.031-.151l.012-.016c.048-.199.111-.482.196-.878.449-1.717.675-2.365 1.363-1.397 2.167-3.179 2.666-5.095.471-1.013.995-2.018 1.348-3.028.262-.626.479-1.258.629-1.889l-.012-.024c-.01-.046-.026-.097-.031-.151l-.012-.016c-.048-.199-.111-.482-.196-.878-.449-1.717-.675-2.365-1.363-1.397-2.167-3.179-2.666-5.095-.471-1.013-.995-2.018-1.348-3.028-.262-.626-.479-1.258-.629-1.889l.012-.024c.01-.046.026-.097.031-.151l.012-.016c.048-.199.111-.482.196-.878.449-1.717.675-2.365 1.363-1.397 2.167-3.179 2.666-5.095.471-1.013-.995-2.018-1.348-3.028-.262-.626-.479-1.258-.629-1.889l.012-.024c.01-.046.026-.097.031-.151l.012-.016c.048-.199.111-.482.196-.878.449-1.717.675-2.365 1.363-1.397 2.167-3.179 2.666-5.095.471-1.013-.995-2.018-1.348-3.028-.262-.626-.479-1.258-.629-1.889z"/>
                      </svg>
                    </div>
                    <p className="text-zinc-400 text-sm">No contribution data available</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Glow Effect Behind Graph */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full -z-10" />

          {/* Additional Ambient Glow */}
          <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] bg-cyan-500/5 blur-[80px] rounded-full -z-10" />

          {/* Stats Summary */}
          <div className="mt-8 pt-8 border-t border-zinc-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-400 mb-1">
                  {Array.isArray(data) && data.length > 0 
                    ? data.reduce((sum, day) => sum + (day.count || 0), 0)
                    : 0
                  }
                </div>
                <div className="text-zinc-400 text-sm">Total Contributions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">
                  {Array.isArray(data) && data.length > 0
                    ? data.filter(day => (day.count || 0) > 0).length
                    : 0
                  }
                </div>
                <div className="text-zinc-400 text-sm">Active Days</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  {Array.isArray(data) && data.length > 0
                    ? Math.max(...data.map(day => day.count || 0), 0)
                    : 0
                  }
                </div>
                <div className="text-zinc-400 text-sm">Max Daily</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}