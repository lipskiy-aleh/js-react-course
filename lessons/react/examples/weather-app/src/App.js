import './App.css'
import { ThemeBtn } from './componets/ThemeBtn'
import { Controls } from './componets/Controls';
import { ThemeProvider } from './theme'
import { themes } from './themes'

function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <div className="weatherApp">
        <Controls />

        <ThemeBtn />
      </div>
    </ThemeProvider>
  );
}

export default App;
