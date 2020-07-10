package Data.Response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter

public class Books {
    @JsonProperty("ID")
    private int ID;
    @JsonProperty("IDBook")
    private int IDBook;
    @JsonProperty("FirstName")
    private String FirstName;
    @JsonProperty("LastName")
    private String LastName;

}
