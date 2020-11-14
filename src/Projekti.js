import React from 'react';

import FileManager, { Permissions, Item, ContextMenu } from 'devextreme-react/file-manager';
import { getData } from './api/firebase';

class Projekti extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      files: [],
    };

    this.onItemClick = this.onItemClick.bind(this);
    this.contextItemRef = React.createRef();
  }

  async componentDidMount() {
    const response = await getData();
    const files = await response.json();
    this.setState(prev => ({ ...prev, files }));
  }

  render() {
    return (
      <FileManager fileSystemProvider={this.state.files} onContextMenuItemClick={this.onItemClick}>
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
    const { name } = options.fileSystemItem;
    this.props.onFileClick(name);
  }
}

export default Projekti;
