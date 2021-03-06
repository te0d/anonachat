var ListGroupItem = require("react-bootstrap").ListGroupItem;

var ChatMessageSpec =
{
	render: function()
	{
		return (
			<ListGroupItem>[{this.props.DateTime.toLocaleString()}] <b className={this.props.IsSelf ? "user-self" : "user"}>{this.props.UserName}:</b> {this.props.Message}</ListGroupItem>
		);
	}
};

var React = require("react");
var ChatMessage = React.createClass(ChatMessageSpec);
module.exports = ChatMessage;