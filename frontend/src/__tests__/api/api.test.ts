import axios from "axios";
import { getConsents, createConsent } from "../../lib/api/consents";
import { SERVER_URL, API_ROUTES } from "../../utils/routes";

jest.mock("axios");

describe("API functions", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("getConsents", () => {
    it.skip("Should fetch data from API", async () => {
      // Arrange
      const data = [
        {
          name: "Grace Wilson",
          email: "grace.wilson@example.com",
          consents: ["Receive newsletter"],
        },
      ];

      // @ts-ignore
      axios.get.mockResolvedValueOnce({ data });

      // Act
      const result = await getConsents();

      // Assert
      expect(result).toEqual(data);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(
        `${SERVER_URL}${API_ROUTES.getConsents}`
      );
    });
  });

  describe("createConsent", () => {
    it.skip("Should create consent on the server", async () => {
      // Arrange
      const data = {
        name: "Grace Wilson",
        email: "grace.wilson@example.com",
        consents: ["Receive newsletter"],
      };

      const responseData = { statusCode: 200 };

      // @ts-ignore
      axios.post.mockResolvedValueOnce({ data: responseData });

      // Act
      const result = await createConsent(data);

      // Assert
      expect(result).toEqual(responseData);
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith(
        `${SERVER_URL}${API_ROUTES.createConsent}`,
        data
      );
    });
  });
});
