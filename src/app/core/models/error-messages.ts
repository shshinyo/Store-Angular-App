type ValidationCodes =
  | "GreaterThanOrEqualValidator"
  | "GreaterThanValidator"
  | "LessThanOrEqualValidator"
  | "LessThanValidator"
  | "InclusiveBetweenValidator"
  | "ExclusiveBetweenValidator"
  | "ScalePrecisionValidator"
  | "LengthValidator"
  | "ExactLengthValidator"
  | "MinimumLengthValidator"
  | "MaximumLengthValidator"
  | "NullValidator"
  | "NotNullValidator"
  | "EmptyValidator"
  | "NotEmptyValidator"
  | "EqualValidator"
  | "NotEqualValidator"
  | "EnumValidator"
  | "RegularExpressionValidator"
  | "EmailValidator"
  | "CreditCardValidator"
  | "PhoneNumberValidator"
  | "FileMinimumLengthValidator"
  | "FileMaximumLengthValidator"
  | "FileContentTypeValidator"
  | "FileSignatureValidator"
  | "FileTypeValidator"
  | "MinimumElementsValidator"
  | "MaximumElementsValidator";

type ForbiddenCodes =
  | "NotAuthorized"
  | "ObsoleteApi"
  | "InvalidRecaptcha"
  | "InvalidRequest"
  | "UnknownError";

type IdentityForbiddenCodes =
  | "SignInFailed"
  | "SignInRequiresConfirmation"
  | "SignInRequiresTwoFactor"
  | "AlreadyHasPassword"
  | "AlreadyInRole"
  | "DuplicateEmail"
  | "DuplicateRoleName"
  | "DuplicateUserName"
  | "EmailAlreadyLinked"
  | "InvalidEmail"
  | "InvalidRole"
  | "InvalidToken"
  | "InvalidUserName"
  | "LockoutNotEnabled"
  | "LoginAlreadyLinked"
  | "NotInRole"
  | "PasswordMismatch"
  | "PasswordRequiresDigit"
  | "PasswordRequiresLower"
  | "PasswordRequiresNonAlphanumeric"
  | "PasswordRequiresUniqueChars"
  | "PasswordRequiresUpper"
  | "PasswordTooShort"
  | "RecoveryCodeRedemptionFailed"
  | "RemoveLoginProviderRequireToHasPassword"
  | "UserLockedOut"
  | "ConcurrencyFailure";

export interface OverriddenMessages<T> {
  /**
   * 404 Entity not found error
   * @param property - The property name value that caused the failure.
   * @param value - The property value that caused the failure.
   */
  NotFound?: (property: string, value: string) => string;
  /**
   * 403 Forbidden request. Provide array to overwrite backend messages.
   */
  Conflict?: { [key in ForbiddenCodes | IdentityForbiddenCodes]?: string };
  /**
   * 422 Validation problem.
   */
  Validation?: { [key in keyof T]?: { [code in ValidationCodes]?: string } };
}
