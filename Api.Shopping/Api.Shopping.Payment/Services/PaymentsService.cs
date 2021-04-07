using Api.Shopping.Common.Models;
using Api.Shopping.Payment.Interfaces;
using Api.Shopping.Payment.Models;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Shopping.Payment.Services
{
    public class PaymentsService: BaseService, IPaymentsService
    {
        private readonly AppSettings appSettings;
        private readonly IHttpContextAccessor httpContextAccessor;

        public PaymentsService(AppSettings appSettings, IHttpContextAccessor httpContextAccessor)
        {
            this.appSettings = appSettings;
            this.httpContextAccessor = httpContextAccessor;
        }

        public async Task<IEnumerable<PaymentMethodUi>> GetPaymentMethods()
        {
            return await Task.Run(() =>
            {
                var hostUrl = $"{httpContextAccessor.HttpContext.Request.Scheme}://{httpContextAccessor.HttpContext.Request.Host}";
                var imagePath = $"{hostUrl}/{appSettings.StaticFilesLocation}/{appSettings.ImagesPath}";
                return appSettings.PaymentMethods.Select(p =>
                {
                    return new PaymentMethodUi { Id = p.Key, Title = p.Value.Title, Logo = $"{imagePath}/{p.Value.Logo}" };
                });
            });
        }

        public async Task<double> GetTotalCost(string method, double amount)
        {
            return await Task.Run(() =>
            {
                var paymentMethod = GetPaymentMethod(method);
                return (1 + paymentMethod.Fee) * amount;
            });
        }

        private PaymentMethod GetPaymentMethod(string method)
        {
            if (appSettings.PaymentMethods.ContainsKey(method))
            {
                return appSettings.PaymentMethods[method];
            }
            throw new ApiException("Payment method is not available", true);
        }
    }
}
