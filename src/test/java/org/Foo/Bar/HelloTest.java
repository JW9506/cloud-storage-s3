package org.Foo.Bar;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.context.junit.jupiter.web.SpringJUnitWebConfig;

@SpringJUnitWebConfig(locations = "classpath:springmvc.xml", resourcePath = "src/main/resources")
public class HelloTest {

  @BeforeEach
  public void setUp() {
  }

  @Test
  public void testHello() {
  }
}
