import { manageAgreementCheck } from "../../lib/helpers/";
import lang from "../../lib/lang/en";

describe("Helpers", () => {
  it("Should add consent to array if it doesn't exist", () => {
    // Arrange
    const agreement = lang.receiveNewsletter;
    const consents: string[] = [];

    // Act
    const result = manageAgreementCheck(agreement, consents);

    // Assert
    expect(result).toEqual([lang.receiveNewsletter]);
  });

  it("Should remove consent from array if it already exist", () => {
    // Arrange
    const agreement = lang.receiveNewsletter;
    const consents: string[] = [
      lang.beShownTargetedAds,
      lang.receiveNewsletter,
    ];

    // Act
    const result = manageAgreementCheck(agreement, consents);

    // Assert
    expect(result).toEqual([lang.beShownTargetedAds]);
  });
});
