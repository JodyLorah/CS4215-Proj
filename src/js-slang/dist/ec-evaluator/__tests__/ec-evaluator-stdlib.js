"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const formatters_1 = require("../../utils/formatters");
const testing_1 = require("../../utils/testing");
test.each([
    [
        types_1.Chapter.SOURCE_1,
        `
    display('message');
    `,
        true,
        'message'
    ],
    [
        types_1.Chapter.SOURCE_1,
        `
    error('error!');
    `,
        false,
        undefined
    ],
    [
        types_1.Chapter.SOURCE_1,
        `
    is_undefined(undefined);
    `,
        true,
        true
    ],
    [
        types_1.Chapter.SOURCE_2,
        `
    is_undefined(null);
    `,
        true,
        false
    ],
    [
        types_1.Chapter.SOURCE_2,
        `
    is_null(undefined);
    `,
        true,
        false
    ],
    [
        types_1.Chapter.SOURCE_2,
        `
    is_null(null);
    `,
        true,
        true
    ],
    [
        types_1.Chapter.SOURCE_1,
        `
    is_string('string');
    `,
        true,
        true
    ],
    [
        types_1.Chapter.SOURCE_1,
        `
    is_string('true');
    `,
        true,
        true
    ],
    [
        types_1.Chapter.SOURCE_1,
        `
    is_string('1');
    `,
        true,
        true
    ],
    [
        types_1.Chapter.SOURCE_1,
        `
    is_string(true);
    `,
        true,
        false
    ],
    [
        types_1.Chapter.SOURCE_1,
        `
    is_string(1);
    `,
        true,
        false
    ],
    [
        types_1.Chapter.SOURCE_1,
        `
    is_number('string');
    `,
        true,
        false
    ],
    [
        types_1.Chapter.SOURCE_1,
        `
    is_number('true');
    `,
        true,
        false
    ],
    [
        types_1.Chapter.SOURCE_1,
        `
    is_number('1');
    `,
        true,
        false
    ],
    [
        types_1.Chapter.SOURCE_1,
        `
    is_number(true);
    `,
        true,
        false
    ],
    [
        types_1.Chapter.SOURCE_1,
        `
    is_number(1);
    `,
        true,
        true
    ],
    [
        types_1.Chapter.SOURCE_1,
        `
    is_boolean('string');
    `,
        true,
        false
    ],
    [
        types_1.Chapter.SOURCE_1,
        `
    is_boolean('true');
    `,
        true,
        false
    ],
    [
        types_1.Chapter.SOURCE_1,
        `
    is_boolean('1');
    `,
        true,
        false
    ],
    [
        types_1.Chapter.SOURCE_1,
        `
    is_boolean(true);
    `,
        true,
        true
    ],
    [
        types_1.Chapter.SOURCE_1,
        `
    is_boolean(1);
    `,
        true,
        false
    ],
    [
        types_1.Chapter.SOURCE_1,
        `
    is_function(display);
    `,
        true,
        true
    ],
    [
        types_1.Chapter.SOURCE_1,
        `
    is_function(x => x);
    `,
        true,
        true
    ],
    [
        types_1.Chapter.SOURCE_1,
        `
    function f(x) {
      return x;
    }
    is_function(f);
    `,
        true,
        true
    ],
    [
        types_1.Chapter.SOURCE_1,
        `
    is_function(1);
    `,
        true,
        false
    ],
    [
        types_1.Chapter.SOURCE_3,
        `
    is_array(1);
    `,
        true,
        false
    ],
    [
        types_1.Chapter.SOURCE_3,
        `
    is_array(pair(1, 2));
    `,
        true,
        true
    ],
    [
        types_1.Chapter.SOURCE_3,
        `
    is_array([1]);
    `,
        true,
        true
    ],
    [
        types_1.Chapter.SOURCE_3,
        `
    array_length([1]);
    `,
        true,
        1
    ],
    [
        types_1.Chapter.SOURCE_1,
        `
    parse_int('10', 10);
    `,
        true,
        10
    ],
    [
        types_1.Chapter.SOURCE_1,
        `
    parse_int('10', 2);
    `,
        true,
        2
    ],
    [
        types_1.Chapter.SOURCE_1,
        `
    is_number(get_time());
    `,
        true,
        true
    ],
    [
        types_1.Chapter.SOURCE_1,
        `
    const start = get_time();
    function repeatUntilDifferentTime() {
      if (start === get_time()) {
        return repeatUntilDifferentTime();
      } else {
        return true;
      }
    }
    repeatUntilDifferentTime();
    `,
        true,
        true
    ],
    [
        types_1.Chapter.SOURCE_2,
        `
    pair(1, 2);
    `,
        true,
        [1, 2]
    ],
    [
        types_1.Chapter.SOURCE_2,
        `
    list(1, 2);
    `,
        true,
        [1, [2, null]]
    ],
    [
        types_1.Chapter.SOURCE_2,
        `
    is_list(1);
    `,
        true,
        false
    ],
    [
        types_1.Chapter.SOURCE_2,
        `
    is_list(pair(1, 2));
    `,
        true,
        false
    ],
    [
        types_1.Chapter.SOURCE_2,
        `
    is_list(list(1, 2));
    `,
        true,
        true
    ],
    [
        types_1.Chapter.SOURCE_2,
        `
    head(pair(1, 2));
    `,
        true,
        1
    ],
    [
        types_1.Chapter.SOURCE_2,
        `
    tail(pair(1, 2));
    `,
        true,
        2
    ],
    [
        types_1.Chapter.SOURCE_2,
        `
    head(null);
    `,
        false,
        undefined
    ],
    [
        types_1.Chapter.SOURCE_2,
        `
    tail(null);
    `,
        false,
        undefined
    ],
    [
        types_1.Chapter.SOURCE_2,
        `
    head(1);
    `,
        false,
        undefined
    ],
    [
        types_1.Chapter.SOURCE_2,
        `
    tail(1);
    `,
        false,
        undefined
    ],
    [
        types_1.Chapter.SOURCE_2,
        `
    length(list(1, 2));
    `,
        true,
        2
    ],
    [
        types_1.Chapter.SOURCE_2,
        `
    length(1);
    `,
        false,
        undefined
    ]
])('Builtins work as expected %#', (chapter, snippet, passing, returnValue) => {
    if (passing) {
        return testing_1.expectResult(formatters_1.stripIndent(snippet), {
            chapter,
            variant: types_1.Variant.EXPLICIT_CONTROL
        }).toEqual(returnValue);
    }
    else {
        return testing_1.snapshotFailure(formatters_1.stripIndent(snippet), { chapter, variant: types_1.Variant.EXPLICIT_CONTROL }, 'fails');
    }
});
//# sourceMappingURL=ec-evaluator-stdlib.js.map