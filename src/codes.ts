import {
  api,
  body,
  endpoint,
  headers,
  pathParams,
  queryParams,
  request,
  response,
  securityHeader,
  DateTime,
  Integer,
  Int64,
  String,
} from "@airtasker/spot"

@api({
  name: "Code Lookup API",
  version: "1.0.0",
})
class CodesApi {
  @securityHeader
  "Authorization": String
}

// get codes
@endpoint({
  method: "GET",
  path: "/codes",
})
class ListCodes {
  @request
  request(
    @queryParams
    queryParams: {
      page?: Integer
    }
  ) {}

  @response({ status: 200 })
  response(
    @body
    body: Code[],

    @headers
    headers: {
      "X-Page": String
    },
  ) {}
}

// create code
@endpoint({
  method: "POST",
  path: "/codes",
})
class CreateCode {
  @request
  request(
    @body
    body: CodeRequest
  ) {}

  @response({ status: 201 })
  response(
    @body
    body: Code
  ) {}
}

// get code
@endpoint({
  method: "GET",
  path: "/codes/:id",
})
class GetCode {
  @request
  request(
    @pathParams
    pathParams: {
      id: Int64
    },
  ) {}

  @response({ status: 200 })
  response(
    @body
    body: Code,
  ) {}
}

// update codes
@endpoint({
  method: "PATCH",
  path: "/codes/:id",
})
class PatchCode {
  @request
  request(
    @pathParams
    pathParams: {
      id: Int64
    },

    @body
    body: CodeRequest
  ) {}

  @response({ status: 200 })
  response(
    @body
    body: Code,
  ) {}
}

// delete code
@endpoint({
  method: "DELETE",
  path: "/codes/:id",
})
class DeleteCode {
  @request
  request(
    @pathParams
    pathParams: {
      id: Int64
    },
  ) {}

  @response({ status: 204 })
  response() {}
}

// models
interface Code {
  id: Int64
  kind: String
  code: String
  description: String
  created_by: String
  updated_by: String
  created_at: DateTime
  updated_at: DateTime
}

interface CodeRequest {
  code: String
  description: String
}
