import App, { Container } from 'next/app'
import React from 'react'
import { initializeStore } from '../stores/store'
import { Provider } from 'mobx-react'
import Layout from '../components/Layout';

class MyMobxApp extends App {
    static async getInitialProps(appContext) {
        const mobxStore = initializeStore()
        appContext.ctx.mobxStore = mobxStore

        let appProps = await App.getInitialProps(appContext)

        return {
            ...appProps,
            initialMobxState: mobxStore,
        }
    }

    constructor(props) {
        super(props)
        const isServer = typeof window === 'undefined'
        this.mobxStore = isServer
            ? props.initialMobxState
            : initializeStore(props.initialMobxState)
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <Container>
                <Provider store={this.mobxStore}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Provider>
            </Container>
        )
    }
}
export default MyMobxApp