import React from "react"
import { PageLayout } from "./PageLayout"
import "./main.js"
import { Provider as StyletronProvider, DebugEngine } from "styletron-react"
import { Client as Styletron } from "styletron-engine-atomic"
import Loading from "../../components/loading"
import { PageContext } from "./types"

interface IProps {
  pageContext: PageContext
}

interface IState {
  isRouteChanging?: boolean
  loadingKey?: number
}

export class ClientPage extends React.Component<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = {
      isRouteChanging: false,
      loadingKey: 0,
    }
  }

  render() {
    const { Page, pageProps } = this.props.pageContext

    // Hydrating Server-rendered Styles
    const hydratedStyles: any = document.getElementsByClassName(
      "_styletron_hydrate_"
    )
    const engine = new Styletron({
      hydrate: hydratedStyles,
    })

    return (
      <StyletronProvider value={engine}>
        <PageLayout>
          <Loading
            isRouteChanging={this.state.isRouteChanging}
            key={this.state.loadingKey}
          />
          <Page {...pageProps} />
        </PageLayout>
      </StyletronProvider>
    )
  }
}
