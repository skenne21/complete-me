import { expect } from 'chai';
import Node from '../lib/Node';


describe('Node', () => {
  let node;
  

  beforeEach(() => {
    node = new Node();
   
  });

  it('Should exist', () => {
    expect(node).to.exist;
  });

  it('Should be able to hold data that is passed in', () => {
    expect(node.children).to.deep.equal({})
  }); 
});