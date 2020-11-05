class Hello extends React.Component {
  static defaultProps = {
    from: 'Shuvo',
    bangs: 1
  }
  render() {
    const props = this.props
    let bangs = '!'.repeat(this.props.bangs);
    return (
        <div>
          <h1>Hi {props.to} from {props.from} {bangs} </h1>
          <img src = {props.image} />
        </div>
    )
  }
}