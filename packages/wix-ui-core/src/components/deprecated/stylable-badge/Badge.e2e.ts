import * as eyes from 'eyes.it';
import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { stylablebadgeTestkitFactory as badgeTestkitFactory } from '../../../testkit/protractor';

describe('Badge', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'StylableBadge',
  });

  beforeEach(() => browser.get(storyUrl));
  eyes.it('should display correct content', () => {
    const dataHook = 'storybook-badge';
    const driver = badgeTestkitFactory({ dataHook });

    return waitForVisibilityOf(driver.element(), 'Cannot find Badge').then(() =>
      expect(driver.text()).toBe("I'm a Badge!"),
    );
  });
});
