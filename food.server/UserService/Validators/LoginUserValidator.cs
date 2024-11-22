using AuthData.DTO;
using FluentValidation;

namespace UserService.Validators;

public class LoginUserValidator : AbstractValidator<LoginDTO>
{
    public LoginUserValidator()
    {
        RuleFor(x => x.Username)
            .NotEmpty()
            .WithMessage("Username is required")
            .When(x => x.Username != null);

        RuleFor(x => x.Password)
            .NotEmpty()
            .WithMessage("Password is required")
            .When(x => x.Password != null);
    }
}
