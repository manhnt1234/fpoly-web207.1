function AlertDanger(props) {
    console.log("AlertDanger", props);
    return (
      <div style={{ background: props.background }}>Alert Danger Component</div>
    );
  }
  export default AlertDanger;
  