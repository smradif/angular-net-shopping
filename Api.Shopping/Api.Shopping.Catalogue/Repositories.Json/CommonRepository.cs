using Api.Shopping.Catalogue.Interfaces;
using Api.Shopping.Catalogue.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Api.Shopping.Catalogue.Repositories.Json
{
    public class CommonRepository<TEntity> : ICommonRepository<TEntity> where TEntity : BaseModel
    {
        protected string key;
        private IDictionary<string, IEnumerable<TEntity>> database = new Dictionary<string, IEnumerable<TEntity>>();


        public async Task<IEnumerable<TEntity>> GetAsync(Expression<Func<TEntity, bool>> filter = null, Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null)
        {
            return await Task.Run(() => GetData());
        }

        public async Task<TEntity> GetByIdAsync(string id)
        {
            return await Task.Run(() =>
            {
                var data = GetJson<IEnumerable<TEntity>>();
                return data.First(d => d.Id == id);
            });
        }

        public Task InsertAsync(TEntity entity)
        {
            throw new NotImplementedException();
        }


        public void Update(TEntity entityToUpdate)
        {
            throw new NotImplementedException();
        }

        public void Delete(TEntity entityToDelete)
        {
            throw new NotImplementedException();
        }

        public void Delete(string id)
        {
            throw new NotImplementedException();
        }

        public Task CommitAsync()
        {
            throw new NotImplementedException();
        }

        public void Rollback()
        {
            throw new NotImplementedException();
        }

        private IEnumerable<TEntity> GetData()
        {
            if (!database.ContainsKey(key))
            {
                database.Add(key, GetJson<IEnumerable<TEntity>>());
            }
            return database[key];
        }

        private void AddData(IEnumerable<TEntity> data)
        {
            if (database.ContainsKey(key))
            {
                database[key] = data;
            }
            else
            {
                database.Add(key, data);
            }
        }

        private T GetJson<T>()
        {
            var path = Path.Combine(Directory.GetCurrentDirectory(), "StaticFiles", "data", key + ".json");
            return JsonConvert.DeserializeObject<T>(File.ReadAllText(path));
        }
    }
}
