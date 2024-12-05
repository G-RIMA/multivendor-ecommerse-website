import '@/styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '@/redux/store/store-config';
import Layout from './layout';
import theme from './theme/theme.config'
import { AppProps } from 'next/app';
import { ConfigProvider } from 'antd';

export default function App({Component, pageProps }: AppProps ){
    return (
        <Provider store={store}>
            <Layout>
                <ConfigProvider theme={theme}>
                  <Component {...pageProps} />
                </ConfigProvider>
            </Layout>
        </Provider>
    )
}