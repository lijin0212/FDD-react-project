// @flow
import React from 'react';
import type { Provided } from '../../../../src/view/draggable/draggable-types';
import mount from './util/mount';

jest.spyOn(console, 'error').mockImplementation(() => {});

it('should throw if no drag handle is applied', () => {
  class NoHandle extends React.Component<{ provided: Provided }> {
    render() {
      const provided: Provided = this.props.provided;

      return (
        <div ref={provided.innerRef} {...provided.draggableProps}>
          Hello there!
        </div>
      );
    }
  }

  expect(() => mount({ WrappedComponent: NoHandle })).toThrow();
});
