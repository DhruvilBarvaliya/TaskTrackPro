namespace TaskTrackPro.Repositories.Servcies
{
    public interface IEmailService
    {
        Task SendEmailAsync(string toEmail, string subject, string body);
    }

}