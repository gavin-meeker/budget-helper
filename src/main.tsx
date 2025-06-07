import {ConfigProvider} from "antd";
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import "./index.css"

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ConfigProvider theme={{
            token: {
                colorPrimary: "4AA36B"
            },
            components: {
                InputNumber: {
                    controlWidth: 150
            }
        }}}>
            <App/>
        </ConfigProvider>
    </StrictMode>,
)
