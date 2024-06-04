import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Layout options={appOptions} />}>
              <Route path="" element={<HomeView />} />
              <Route path="login" element={<LoginView />} />
              <Route path="*" element={<div>404</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;