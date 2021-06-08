import React from "react"
import { PageLayout } from "./PageLayout"
import "./main.js"
import { Provider as StyletronProvider, DebugEngine } from "styletron-react"
import { Client as Styletron } from "styletron-engine-atomic"
import { NProgress } from "@tanem/react-nprogress"
import Loading from "../../components/loading"
import { PageContext } from "./types"

interface IProps {
  pageContext: PageContext
}

interface IState {
  isRouteChanging?: boolean
}

export class ClientPage extends React.Component<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = {
      isRouteChanging: false,
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
          <Loading isRouteChanging={this.state.isRouteChanging} />
          <Page {...pageProps} />
        </PageLayout>
      </StyletronProvider>
    )
  }
}
