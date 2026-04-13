// Импортируем StrictMode - инструмент для обнаружения проблем в коде
import { StrictMode } from 'react'

// Импортируем функцию createRoot для рендеринга React приложения
import { createRoot } from 'react-dom/client'

// Импортируем глобальные стили
import './index.css'

// Импортируем главный компонент App
import App from './App.jsx'

// Находим в HTML элемент с id="root" и создаём React корень
createRoot(document.getElementById('root')).render(
  // StrictMode оборачивает приложение для дополнительных проверок
  <StrictMode>
    <App />  {/* Рендерим компонент App */}
  </StrictMode>,
)