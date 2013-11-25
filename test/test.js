
describe('toElement', function(){

  var element = require('to-element')
    , assert = require('assert')
    , dom = require('dom');

  it('(element)', function(){
    assert(document.body == element(document.body));
  })

  it('(List)', function(){
    assert(document.body == element(dom('body')));
  })

  it('({ el: element })', function(){
    assert(document.body == element({ el: document.body }));
  })

  it('("<div>")', function(){
    assert('div' == element('<div>').nodeName.toLowerCase());
  })

  it('("body")', function(){
    assert(document.body == element('body'));
  })

  it('(.toElement)', function(){
    assert(document.body == element({ toElement: toElement }));
    function toElement(){
      return document.body;
    }
  })

})
