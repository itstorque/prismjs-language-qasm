Prism.languages.qasm = {

	'comment': /(\/\/|#).*$/m,
	'string': /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,

	'keyword': [
		/(?:include|OPENQASM|version)\b/,
		{
			pattern: /gate(?=  *\w)/g,
			alias: 'gatedecl'
		},
		{
			pattern: /(gate  *)\w*/g,
			lookbehind: true,
			alias: 'gatedecl_name'
		},
		{
			pattern: /(qreg(?=  *\w)|creg(?=  *\w))/g,
			alias: 'regdecl'
		},
		{
			pattern: /(opaque(?= *[a-z][a-z|A-Z|\d|_]*)|if(?= *\( *([a-z][a-z|A-Z|\d|_|\[|\]]*) *\=\= *\d\d*\))|barrier(?= *[a-z][a-z|A-Z|\d|_]*))/g,
			alias: 'statement'
		},
		{
			pattern: /\b(?:qubit|qubits|map)\b/,
			alias: 'register'
		}
	],

	'function': [
		{
			pattern: /(measure(?= *[a-z][a-z|A-Z|\d|_]*(\[.\])? *-> *[a-z][a-z|A-Z|\d|_]*)|reset(?= *[a-z][a-z|A-Z|\d|_]*))/g,
			alias: 'qop'
		},
		{
			pattern: /([Cc][Xx] (?= *[a-z][a-z|A-Z|\d|_|\[|\]]* *, *[a-z][a-z|A-Z|\d|_|\[|\]]*)|[Hh] (?= *[a-z][a-z|A-Z|\d|_|\[|\]]*))/g,
			alias: 'uop'
		},
		{
			pattern: /([Xx] (?= *[a-z][a-z|A-Z|\d|_|\[|\]]*))/g,
			alias: 'eop'
		},
		{
			pattern: /\b(?:sin|cos|tan|exp|ln|sqrt)(?= *\(.*\))/g,
			alias: 'unaryop'
		},
		{
			pattern: /((?:(gate  *\w* ( *|[a-z][a-z|A-Z|\d|_]* *,)*)) *)[a-z][a-z|A-Z|\d|_]*/g,
			lookbehind: true,
			alias: 'register'
		}
	],

	'variable': [
		{
			pattern: /(\b[a-z][a-z|A-Z|\d|_]*(?=(\[[a-z|A-Z|0-9| |_|\[|\]]*\])|( *\-> *)))/g,
			alias: 'register'
		},
		{
			pattern: /((?:reset|opaque|\->|(gate  *\w*  *)) *)[a-z][a-z|A-Z|\d|_]*/g,
			lookbehind: true,
			alias: 'register'
		}
	],

	'constant': /\b[Pp][Ii]\b/g,

	'number': {
			pattern: /([^A-Za-z])(\+|\-)?\d(\.[0-9])?([Ee]?[-+]?[0-9]*(\.[0-9]*)?)?/g,
			lookbehind: true,
			alias: 'real and imag'
	},



};

console.log(Prism)
