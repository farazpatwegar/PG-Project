package com.app.showbooking;

import org.modelmapper.Conditions;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
//@EntityScan(basePackages = "com.app.entities")//added when your entities are not in default location
//@ComponentScan(basePackages = "com.app.showbooking")
@EntityScan(basePackages = "com.app.showbooking.entities")
@EnableJpaRepositories(basePackages = "com.app.showbooking.repositories")
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);		
		
	}
	
	@Bean // equivalent to <bean id ..../> in xml file
	public ModelMapper mapper() { 
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration()
		.setMatchingStrategy(MatchingStrategies.LOOSE)
		.setPropertyCondition(Conditions.isNotNull());
		return modelMapper;
	}

}
