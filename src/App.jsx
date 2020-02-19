import React, { useState } from 'react';
import Header from 'components/layout/Header';
import Content from 'components/layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from 'context';
import 'App.scss';
import { hot } from 'react-hot-loader';

const App = ({ darkModeDefault = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main className={`App ${darkMode ? 'darkmode' : ''}`}>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Content />
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};

export default hot(module)(App);
// export default App;
