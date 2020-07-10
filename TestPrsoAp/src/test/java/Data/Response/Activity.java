package Data.Response;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class Activity {
  @JsonProperty("ID")
  int ID;
  @JsonProperty("Title")
  String Title;
  @JsonProperty("DueDate")
  String DueDate;
  @JsonProperty("Completed")
  String Completed;
}
