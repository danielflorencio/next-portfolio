import { render } from "@testing-library/react";
import SkillBlocks from "../src/components/SkillBlocks";
import { skillBlocks } from "../src/components/SkillBlocks";

test('Renders the SkillBlocks section.', () => {
    render(<SkillBlocks/>)
    // const { container } = render(<SkillBlocks/>)
    // expect(container).toMatchSnapshot();
})

test('There are more than 8 skills listed.', () => {
    expect(skillBlocks.length < 8).toBe(false);
})