using Api.Shopping.Payment.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Shopping.Payment.Interfaces
{
    public interface IPaymentsService
    {
        Task<IEnumerable<PaymentMethodUi>> GetPaymentMethods();

        Task<double> GetTotalCost(string method, double amount);
    }
}
