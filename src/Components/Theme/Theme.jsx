import { use } from "react";
import { ThemeContext, ThemeProvider } from "../../Context/ThemeContext";
function Card() {
  const { theme, toggleTheme } = use(ThemeContext);
  return (
    <div
      className={`max-w-md mx-auto my-8 rounded-lg p-6 ${
        theme === "light" ? "bg-slate-200" : "bg-slate-800"
      } `}
    >
      <p className={theme === "light" ? "text-slate-800" : "text-slate-200"}>
        Front-End Developer with over 3 years of experience building responsive
        web applications using React.js. Skilled in TypeScript, state
        management, and component-driven development. Known for solving
        technical challenges, mentoring juniors, and thriving in team
        environments. Dedicated to learning and delivering high-quality
        solutions.
      </p>
      <button
        onClick={toggleTheme}
        className="mt-6 px-4 py-2 bg-slate-600 text-white rounded-md  outline-none"
      >
        {theme === "light" ? "DarkMode" : "lightMode"}
      </button>
    </div>
  );
}

function Theme() {
  return (
    <ThemeProvider>
      <Card />
    </ThemeProvider>
  );
}
export default Theme;


