import { SplitByWeeksPipe } from './split-by-weeks.pipe';

describe('SplitByWeeksPipe', () => {
  it('create an instance', () => {
    const pipe = new SplitByWeeksPipe();
    expect(pipe).toBeTruthy();
  });
});
