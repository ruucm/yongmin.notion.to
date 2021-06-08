import React from "react"
import Loading from "../../components/loading"

interface IProps {}

interface IState {
  isRouteChanging?: boolean
  loadingKey?: number
}

export class LoadingClass extends React.Component<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = {
      isRouteChanging: false,
      loadingKey: 0,
    }
  }

  render() {
    return (
      <Loading
        isRouteChanging={this.state.isRouteChanging}
        key={this.state.loadingKey}
      />
    )
  }
}
