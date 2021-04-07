using Api.Shopping.Payment.Interfaces;
using Api.Shopping.Payment.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Shopping.Payment.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PaymentsController : BaseController
    {
        private IPaymentsService service;

        public PaymentsController(IPaymentsService service)
        {
            this.service = service;
        }


        [HttpGet]
        [Route(ApiConstants.PAYMENT_METHODS_GET)]
        public async Task<IEnumerable<PaymentMethodUi>> GetPaymentMethods()
        {
            return await service.GetPaymentMethods();
        }

        [HttpGet]
        [Route(ApiConstants.PAYMENT_COST_GET)]
        public async Task<double> GetTotalCost(string method, double amount)
        {
            return await service.GetTotalCost(method, amount);
        }
    }
}
