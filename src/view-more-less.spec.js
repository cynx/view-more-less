'use strict';

const expectedList = [
    'item1',
    'item2',
    'item3',
    'item4',
    'item5',
    'item6',
    'item7'
];

describe('list-view-more-specs',function(){
    var scope, directiveElem, compile, timeout, document, rootScope,rootScopeNewInstance, viewMoreCtrl, directiveScope;

    //inject common module
    beforeEach(function(){


        angular.mock.module('view.moreless');

        inject(function($compile, $q, $rootScope, $timeout, $document){
            compile=$compile;
            timeout = $timeout;
            document = $document;
            rootScope = $rootScope;


        });

    });

    beforeEach(function(){
        rootScopeNewInstance = rootScope.$new();
        rootScopeNewInstance.list = expectedList;
        directiveElem = compile(angular.element("<view-more-less limit='5' show-more-text='Show More' show-less-text='Show Less' is-static='false' list='list' />"))(rootScopeNewInstance);
        rootScope.$digest();
        scope = directiveElem.isolateScope();
        viewMoreCtrl = scope.viewmore;

    });


    it('test directive template to be defined',function(){
        expect(directiveElem).toBeDefined();
    });

    it('test for directive to be replaced by templates containing li',function(){
        expect(directiveElem[0].tagName).toEqual('LI');
        //expect(directiveElem.find('button').length).toEqual(1);
    });

    it('test for limit',function(){
        expect(viewMoreCtrl.limit).toBeDefined();
        expect(viewMoreCtrl.limit).toEqual('5');
    });

    it('test for static',function(){
        expect(scope.isStatic).toBeDefined();
        expect(scope.isStatic).toEqual('false');
    });

    it('test for list',function(){
        expect(scope.list).toBeDefined();
        expect(scope.list).toEqual(expectedList);
    });

    it('test for watch on list',function(){
        rootScopeNewInstance.list = ['item1'];
        rootScope.$digest();
        expect(scope.list).toEqual(['item1']);
    });

    it('test for show less more text',function(){
        expect(viewMoreCtrl.showMoreText).toEqual('Show More');
        expect(viewMoreCtrl.showLessText).toEqual('Show Less');
    });

});