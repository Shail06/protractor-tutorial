describe('Protractor Demo App', function(){
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var gobutton = element(by.id('gobutton'));
    var result = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory')); // This returns the ElementArrayFinder type which has methods to manipulate data

    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should have a title', function(){    
        expect(browser.getTitle()).toEqual('Super Calculator');
    });
    it('should add one and two', function(){
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);
        
        gobutton.click();
        
        expect(result.getText()).toEqual('3');
    });

    it('should read the value from an input', function(){
        firstNumber.sendKeys(20);
        expect(firstNumber.getAttribute('value')).toEqual('20');
    });

    function add(a, b){
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        gobutton.click();
    }

    it('should have a history', function(){
        add(1, 2);
        add(2, 3);

        expect(history.count()).toEqual(2);

        expect(history.last().getText()).toContain('1 + 2');
        expect(history.first().getText()).toContain('2 + 3');
    });

});