/****************************************************************************
**  Author:       Adam Wright
**  Description:  Application that creates an in browser display of Github's
**                markdown dialect
****************************************************************************/

// @ts-check

import React from 'react';
import './App.css';
import marked from 'marked';


// Allows single line break <br> which mimicks GitHub's syntax
marked.setOptions({breaks: true});

// 

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: placeholder};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({
            // @ts-ignore
            value: this.refs.editor.value
        });
    }

    createMarkup() {
        let markdown = marked(this.state.value);
        return {__html: markdown};
    }

    render() {
        let { value } = this.state;
        return (
            <div className="outside-box">
                {/* Github source code link ------------------------------- */}
                <div id='gh-bar'>
                    <a
                        id='gh-link'
                        href='https://github.com/adam4321/react-markdown-previewer'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div>Open GitHub repo in a new tab</div>
                    </a>
                </div>

                <div className="main-box">
                    {/* Input field --------------------------------------- */}
                    <div className="one-half column markdown-div">
                        <button id="back-button" onClick={() => window.history.back()}> Back </button>
                        <textarea
                            className="markdown-input"
                            onChange={this.handleChange}
                            id="editor"
                            ref="editor"
                            defaultValue={value}
                        >
                        </textarea>
                    </div>

                    {/* Output field -------------------------------------- */}
                    <div
                        id="preview"
                        className="one-half column"
                        dangerouslySetInnerHTML={this.createMarkup()}
                    >
                    </div>
                </div>
            </div>
        );
    }
}


/*  The placeholder text that displays on page load ------------------------ */

const placeholder = `# React Markdown Previewer!

## Just start entering text...
### And it will render for you:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode}
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
>>[Come find me at Adamjwright.com](https://adamjwright.com)`


export default App;
