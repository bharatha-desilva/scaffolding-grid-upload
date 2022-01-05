using System;
using Bourque.GridUpload.Data.Models.DbModels;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Bourque.GridUpload.Data.Services.Tests.ModelTests;

[TestClass]
public class ValidationRuleTypeTest
{
    [TestMethod]
    public void TestValues()
    {
        Assert.AreEqual("numeric", ValidationRuleType.numeric.ToString());
        Assert.AreEqual("email", ValidationRuleType.email.ToString());
        Assert.AreEqual("pattern", ValidationRuleType.pattern.ToString());
    }
}