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

  it('Should be able to have a child node', () => {
    expect(node.children).to.deep.equal({})
  });


  it('Should be able to store complete words, when the last node is passed in', () => {

    expect(node.completeWord).to.deep.equal(false)
  });

  it('Should start at a default value of 0 for popularity', () => {

    expect(node.popularity).to.deep.equal(0)
  });

});