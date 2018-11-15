

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import marked from 'marked';



marked.setOptions({
  breaks: true,
  });


class App extends React.Component {
  constructor() {
    super();
    this.state = {
        value: placeholder
      };
	this.handleChange = this.handleChange.bind(this);
}
  
 render() {
    let {value} = this.state;
    return (
        <div className = "row">
          <div 
            className =
            "one-half column markdown-div">
            <textarea
              className = "markdown-input"
              onChange = {this.handleChange}
              id = "editor" ref = "editor"
              defaultValue = {value}>
            </textarea>
          </div>
          <div id="preview" className="one-half column" dangerouslySetInnerHTML={this.createMarkup()}>
        </div>
       </div>
    )
  }
  handleChange() {
    this.setState({
      value: this.refs.editor.value
    });
  }
  createMarkup() {
    let markdown = marked(this.state.value);
    return {__html: markdown}
  }
}

const placeholder = `# React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
\n\r\n\r[Adam Wright](https:\/\/freecodecamp.com\/adam4321)`

// ReactDOM.render(<MarkdownApp />, document.getElementById("container"));

export default App;