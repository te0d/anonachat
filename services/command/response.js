"use strict";

let Variable = require("./variable");

class Response
{
	constructor(symbol)
	{
		this.Symbol = symbol;
		this.Arguments = [ ];
	}
	
	addArgument(name, value)
	{
		if (this.containsArgument(name))
			throw "Argument with name '" + name + "' already added";
		let argument = new Variable(name, value);
		this.Arguments.push(argument);
	}
	
	containsArgument(name)
	{
		if (this.getArgument(name))
			return true;
		return false;
	}
	
	getArgument(name)
	{
		let arg = this.Arguments.find(function(arg) { return arg.Name === name; });
		if (!arg)
			return null;
		return arg.Value;
	}
}

module.exports = Response;