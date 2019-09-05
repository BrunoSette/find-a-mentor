import { generate, prefix } from '../titleGenerator';

const tag = 'javascript';
const name = 'John Doe';
const country = 'USA';

describe.only('title generator', () => {
  it('should be only prefix by default', () => {
    const title = generate({});

    expect(title).toBe(`${prefix}`);
  });

  it('should be mentor name if supplied', () => {
    const title = generate({
      tag,
      name,
      country,
    });

    expect(title).toBe(`${prefix} | ${name}`);
  });

  it(`should be tag's mentors if country supplied`, () => {
    const title = generate({
      tag,
    });

    expect(title).toBe(`${prefix} | ${tag} professores`);
  });
});
