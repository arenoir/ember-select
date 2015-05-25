import score from 'ember-select/utils/score';
import { module, test } from 'qunit';

module('Unit | Utility | score');

test('Exact matches should score 1.0', function(assert) {
  var result = score();

  assert.expect(1);
  assert.equal(score('Hello World', 'Hello World'), 1.0, 'Exact matches should score 1.0');
});

test('Matches out of order', function(assert) {
  var result = score();

  assert.expect(1);
  assert.equal(score('Hello World', 'WH'), 0, 'should return 0');
});

