import { Component } from '@angular/core';
import { PickerCell } from 'tanbo-ui-native';

@Component({
    templateUrl: './picker-example.component.html',
    styleUrls: ['./picker-example.component.scss']
})
export class PickerExampleComponent {
    data: Array<PickerCell> = [{
        text: '浙江',
        value: 1,
        children: [{
            text: '杭州',
            value: 10,
            children: [{
                text: '江干区',
                value: 100
            }, {
                text: '上城区',
                value: 101
            }]
        }]
    }, {
        text: '江苏',
        value: 2
    }, {
        text: '四川',
        value: 3,
        children: [{
            text: '成都',
            value: 30,
            children: [{
                text: '双流区',
                value: 301
            }, {
                text: '武侯区',
                value: 302
            }]
        }, {
            text: '广元',
            value: 31
        }]
    }, {
        text: '河南',
        value: 4
    }, {
        text: '北京',
        value: 5
    }, {
        text: '海南',
        value: 6
    }];

    result: string = '';

    change(cells: Array<PickerCell>) {
        this.result = '';
        cells.forEach(item => {
            this.result += ' ' + item.text;
        });
    }
}