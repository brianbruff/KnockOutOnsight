using System.Collections.Generic;

namespace HabZoneKnockoutSample.Models
{
    static class SampleData
    {
        private static List<CarMake> _makes = null;

        static SampleData()
        {
            var toyotaEngines = new List<ModelEngine> { new ModelEngine { Id = 1, Capacity = 1998, Name = "2ltr" } };
            var vwEngines = new List<ModelEngine> { new ModelEngine { Id = 10, Capacity = 1597, Name = "1.6ltr" } };

            _makes = new List<CarMake>
                           {
                               new CarMake { Id = 1, Name = "Toyota", 
                                   CarModels = new List<CarModel> { 
                                       new CarModel { Id = 1, Name = "Corolla", ModelEngines = toyotaEngines },
                                       new CarModel { Id = 2, Name = "Carina", ModelEngines = toyotaEngines }}  
                               },
                               new CarMake { Id = 10, Name = "Volkswagon", CarModels = new List<CarModel>
                                                                                           {
                                                                                               new CarModel { Id = 10, Name = "Golf", ModelEngines = vwEngines },
                                                                                               new CarModel { Id = 11, Name = "Passat", ModelEngines = vwEngines }
                                                                                           } }
                           };
        }


        static public List<CarMake> CarMakes { get { return _makes; } }
    }


    public class CarMakeInfo
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class CarMake : CarModelInfo
    {
        public List<CarModel> CarModels { get; set; }
    }

    public class CarModelInfo
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class CarModel : CarModelInfo
    {
        public List<ModelEngine> ModelEngines { get; set; }
    }

    public class ModelEngine
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Capacity { get; set; }
    }
}