import React from 'react';

import FileManager, { Permissions, Item, ContextMenu } from 'devextreme-react/file-manager';

import { fileItems } from './data.js';

class Projekti extends React.Component {

  constructor(props) {
    super(props);

    this.onItemClick = this.onItemClick.bind(this);
    this.contextItemRef = React.createRef();
  }

  render() {
    return (
      <FileManager fileSystemProvider={fileItems} onContextMenuItemClick={this.onItemClick}>
        <Permissions
          create={true}
          copy={true}
          move={true}
          delete={true}
          rename={true}
          upload={true}
          download={true}>
        </Permissions>
        <ContextMenu>
          <Item text="Open position" icon="plus" />
        </ContextMenu>
      </FileManager>
    );
  }

  onItemClick(options) {
    let id = 1;
    const title = options.fileSystemItem.name;
    if (title === '25342 RIMI Liepāja') id = 2;
    this.props.onFileClick(id, title);
  }
}

export default Projekti;
