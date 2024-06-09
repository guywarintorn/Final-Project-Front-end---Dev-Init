export default function Header(props) {
  const {theme, setTheme} = props;

  function ToggleTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <header className="flex dark:bg-slate-800 items-center justify-center p-6 bg-white border-b">
      <div className="flex-none">
        <span className="dark:text-white">Management App</span>
      </div>
      <div className="flex-grow">
      </div>
      <div className="flex-none">
        <span className="mr-2 text-dark dark:text-white">{theme === 'light' ? 'dark' : 'light'}</span>
        <button className="border text-white p-2 dark:border-white bg-slate-700 hover:bg-slate-900" onClick={ToggleTheme}>
          Change
        </button>
      </div>
    </header>
  )
}